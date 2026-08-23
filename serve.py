#!/usr/bin/env python3
import os, http.server, socketserver
PORT = int(os.environ.get("PORT", 4173))
DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=DIST, **k)
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache"); super().end_headers()
    def log_message(self, *a): pass
with socketserver.TCPServer(("0.0.0.0", PORT), H) as s:
    print(f"Hotel static server on :{PORT}", flush=True); s.serve_forever()
