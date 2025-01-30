import http.server
import ssl

class SimpleHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'index.html'
        return super().do_GET()

httpd = http.server.HTTPServer(('0.0.0.0', 443), SimpleHTTPRequestHandler)

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(certfile='server.crt', keyfile='server.key')

httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print("Serving on https://0.0.0.0:443")
httpd.serve_forever()
