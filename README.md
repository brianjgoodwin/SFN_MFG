# SFN_MFG

Marketing site for SFN_MFG — a San Diego-based 3D printing service offering FDM and resin printing, rapid prototyping, and small-batch production runs.

## Stack

Plain HTML/CSS, no build step. One page (`index.html`) with embedded JavaScript for mobile nav.

## Structure

```
index.html      — main page (hero, capabilities, about, quote widget, contact)
style.css       — all styles
logo.png        — brand mark
```

## Running locally

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Quote widget

The instant pricing widget is embedded via iframe from [AutoQuote3D](https://app.autoquote3d.com). No configuration needed — it's tied to the SFN_MFG account.

## Design

Inter (body) + Playfair Display (headings). Warm ivory palette with terracotta accents. Responsive down to mobile with a hamburger nav at 600px.
