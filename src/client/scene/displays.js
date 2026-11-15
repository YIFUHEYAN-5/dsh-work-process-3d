// Canvas-painted dials, plates and screens used across the machine.
import { canvasTexture, FONT_SANS, FONT_MONO, TAU } from './util.js';

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function fitText(g, text, maxW, size, weight, family) {
  let s = size;
  g.font = `${weight} ${s}px ${family}`;
  while (s > 8 && g.measureText(text).width > maxW) {
    s -= 2;
    g.font = `${weight} ${s}px ${family}`;
  }
  return s;
}

/** Round dial face. Angle convention: 0% at 7:30, 100% at 4:30, clockwise. */
export function gaugeFace({ title, sub, labels, redFrom = 0.8, accent = '#4d6bfe' }) {
  return canvasTexture(512, 512, (g, w) => {
    const c = w / 2;
    const bg = g.createRadialGradient(c, c * 0.8, 20, c, c, c);
    bg.addColorStop(0, '#1d2128');
    bg.addColorStop(1, '#0a0b0e');
    g.fillStyle = bg;
    g.fillRect(0, 0, w, w);
    const ang = (p) => (-135 + 270 * p) * (Math.PI / 180);
    const pt = (p, r) => [c + Math.sin(ang(p)) * r, c - Math.cos(ang(p)) * r];
    // red zone
    g.strokeStyle = '#e5484d';
    g.lineWidth = 22;
    g.beginPath();
    g.arc(c, c, 196, ang(redFrom) - Math.PI / 2, ang(1) - Math.PI / 2);
    g.stroke();
    // accent arc
    g.strokeStyle = accent;
    g.lineWidth = 6;
    g.beginPath();
    g.arc(c, c, 210, ang(0) - Math.PI / 2, ang(redFrom) - Math.PI / 2);
    g.stroke();
    for (let i = 0; i <= 50; i++) {
      const p = i / 50;
      const major = i % 5 === 0;
      const [x0, y0] = pt(p, major ? 170 : 184);
      const [x1, y1] = pt(p, 204);
      g.strokeStyle = p >= redFrom ? '#ffd1d1' : '#e8ecf2';
      g.lineWidth = major ? 5 : 2;
      g.beginPath();
      g.moveTo(x0, y0);
      g.lineTo(x1, y1);
      g.stroke();
    }
    g.fillStyle = '#e8ecf2';
    g.font = `600 30px ${FONT_SANS}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    labels.forEach((text, i) => {
      const [x, y] = pt(i / (labels.length - 1), 136);
      g.fillText(text, x, y);
    });
    g.font = `700 34px ${FONT_SANS}`;
    g.fillText(title, c, c + 92);
    g.fillStyle = '#8f98a8';
    g.font = `600 22px ${FONT_SANS}`;
    g.fillText(sub, c, c + 130);
  });
}

/** Digit strip for odometer drums; cells run along the circumference (u). */
export function drumStrip(width, radius, { inverted = false } = {}) {
  const W = 1024;
  const H = Math.max(64, Math.round((W * width) / (TAU * radius)));
  return canvasTexture(W, H, (g) => {
    g.fillStyle = inverted ? '#e9e6dc' : '#101114';
    g.fillRect(0, 0, W, H);
    g.fillStyle = inverted ? '#141414' : '#f1efe8';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = `700 ${Math.round(W / 10 * 0.62)}px ${FONT_MONO}`;
    for (let d = 0; d < 10; d++) {
      g.save();
      g.translate((d + 0.5) * (W / 10), H / 2);
      g.rotate(-Math.PI / 2);
      g.fillText(String(d), 0, 2);
      g.restore();
    }
    // subtle separators between digits
    g.fillStyle = 'rgba(0,0,0,0.35)';
    for (let d = 0; d <= 10; d++) g.fillRect(d * (W / 10) - 1, 0, 2, H);
  }, { anisotropy: 8 });
}

/** Engraved station nameplate. */
export function nameplate(zh, en, code, accent = '#4d6bfe') {
  return canvasTexture(512, 144, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#2e3239');
    bg.addColorStop(1, '#1b1e23');
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,0.18)';
    g.lineWidth = 3;
    roundRect(g, 6, 6, w - 12, h - 12, 10);
    g.stroke();
    g.fillStyle = accent;
    roundRect(g, 22, 30, 108, 84, 8);
    g.fill();
    g.fillStyle = '#ffffff';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = `800 30px ${FONT_MONO}`;
    g.fillText(code, 76, 72);
    g.textAlign = 'left';
    g.fillStyle = '#f2f4f8';
    fitText(g, zh, w - 170, 46, 700, FONT_SANS);
    g.fillText(zh, 152, 58);
    g.fillStyle = '#9aa3b2';
    fitText(g, en.toUpperCase(), w - 170, 24, 600, FONT_SANS);
    g.fillText(en.toUpperCase(), 152, 100);
  });
}

/** Small printed label (rows, ports, parts). */
export function labelPlate(text, sub = '', { w = 256, h = 72, color = '#e8ecf2', bg = '#17191d' } = {}) {
  return canvasTexture(w, h, (g) => {
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.fillStyle = color;
    g.textBaseline = 'middle';
    g.textAlign = 'left';
    fitText(g, text, w - 20, Math.round(h * 0.42), 700, FONT_SANS);
    g.fillText(text, 12, sub ? h * 0.36 : h / 2);
    if (sub) {
      g.fillStyle = '#8b94a3';
      fitText(g, sub, w - 20, Math.round(h * 0.26), 600, FONT_SANS);
      g.fillText(sub, 12, h * 0.76);
    }
  });
}

/** Self-lit text display. draw(lines) where lines: [{ text, size, color, weight, mono }] */
export function textScreen(w, h, { bg = '#05070a', glow = 0 } = {}) {
  const api = canvasTexture(w, h, (g) => {
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
  });
  api.set = (lines, align = 'left') => {
    api.redraw((g) => {
      g.fillStyle = bg;
      g.fillRect(0, 0, w, h);
      let y = 0;
      for (const l of lines) {
        const size = l.size || 28;
        y += l.gap ?? size * 1.15;
        g.fillStyle = l.color || '#dfe7ff';
        g.font = `${l.weight || 600} ${size}px ${l.mono ? FONT_MONO : FONT_SANS}`;
        g.textAlign = l.align || align;
        g.textBaseline = 'alphabetic';
        if (glow) {
          g.shadowColor = l.color || '#dfe7ff';
          g.shadowBlur = glow;
        }
        const x = g.textAlign === 'center' ? w / 2 : g.textAlign === 'right' ? w - 16 : 16;
        fitText(g, l.text, w - 32, size, l.weight || 600, l.mono ? FONT_MONO : FONT_SANS);
        g.fillText(l.text, x, y);
        g.shadowBlur = 0;
      }
    });
  };
  return api;
}

/** Green phosphor CRT that keeps the last lines of commands. */
export function crtScreen() {
  const w = 512;
  const h = 384;
  const lines = ['DSH TERMINAL  v0.2', 'PS D:\\workspace>'];
  const api = canvasTexture(w, h, null);
  let cursor = true;
  const draw = () => api.redraw((g) => {
    const bg = g.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, w * 0.7);
    bg.addColorStop(0, '#062414');
    bg.addColorStop(1, '#010604');
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.font = `600 24px ${FONT_MONO}`;
    g.textBaseline = 'alphabetic';
    g.shadowColor = '#3dff8f';
    g.shadowBlur = 10;
    const shown = lines.slice(-11);
    shown.forEach((l, i) => {
      g.fillStyle = i === shown.length - 1 ? '#b9ffd4' : '#3fe58a';
      g.fillText(l.length > 34 ? `${l.slice(0, 33)}…` : l, 18, 40 + i * 31);
    });
    if (cursor) {
      const last = shown[shown.length - 1] || '';
      g.fillStyle = '#b9ffd4';
      g.fillRect(18 + Math.min(34, last.length) * 13.3, 40 + (shown.length - 1) * 31 - 20, 12, 24);
    }
    g.shadowBlur = 0;
    g.fillStyle = 'rgba(0,0,0,0.28)';
    for (let y = 0; y < h; y += 3) g.fillRect(0, y, w, 1);
  });
  draw();
  api.push = (text, status) => {
    lines.push(`PS> ${text}`);
    if (status) lines.push(status);
    while (lines.length > 40) lines.shift();
    draw();
  };
  api.line = (text) => {
    lines.push(text);
    while (lines.length > 40) lines.shift();
    draw();
  };
  api.blink = (on) => {
    if (cursor === on) return;
    cursor = on;
    draw();
  };
  return api;
}

/** Vertical level scale for the fuel tank. */
export function scaleStrip() {
  return canvasTexture(96, 768, (g, w, h) => {
    g.fillStyle = '#e9edf3';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#16181c';
    g.textAlign = 'right';
    g.textBaseline = 'middle';
    g.font = `700 22px ${FONT_SANS}`;
    for (let i = 0; i <= 50; i++) {
      const y = h - 12 - (i / 50) * (h - 24);
      const major = i % 10 === 0;
      g.fillRect(w - (major ? 46 : 26), y - (major ? 2 : 1), major ? 46 : 26, major ? 4 : 2);
      if (major) g.fillText(String(i * 2), w - 52, y);
    }
  });
}

/** Big backlit sign letters: white on black, used as emissive map. */
export function signTexture(text, sub) {
  return canvasTexture(2048, 256, (g, w, h) => {
    g.fillStyle = '#000000';
    g.fillRect(0, 0, w, h);
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillStyle = '#ffffff';
    fitText(g, text, w - 120, 120, 800, FONT_SANS);
    g.fillText(text, w / 2, sub ? h * 0.4 : h / 2);
    if (sub) {
      g.fillStyle = '#9fb4ff';
      fitText(g, sub, w - 200, 44, 600, FONT_SANS);
      g.fillText(sub, w / 2, h * 0.82);
    }
  });
}

/** Whiteboard face of the kanban board. */
export function kanbanFace() {
  return canvasTexture(512, 384, (g, w, h) => {
    g.fillStyle = '#f3f4f6';
    g.fillRect(0, 0, w, h);
    const cols = [['待办', 'TODO'], ['进行', 'DOING'], ['完成', 'DONE']];
    const cw = w / 3;
    cols.forEach(([zh, en], i) => {
      g.fillStyle = i === 1 ? '#4d6bfe' : i === 2 ? '#2f9e6b' : '#5b6270';
      g.fillRect(i * cw + 8, 8, cw - 16, 46);
      g.fillStyle = '#ffffff';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.font = `700 24px ${FONT_SANS}`;
      g.fillText(`${zh} ${en}`, i * cw + cw / 2, 31);
      if (i > 0) {
        g.fillStyle = '#c9ced6';
        g.fillRect(i * cw - 1, 62, 2, h - 70);
      }
    });
  });
}
