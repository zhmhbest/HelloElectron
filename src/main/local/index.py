import os
import json
from flask import Flask

app = Flask(__name__)
config = json.loads(
    open(os.path.join(os.path.dirname(__file__), "config.json"), 'r').read()
)

@app.route("/")
def index():
    return "Local Server"


@app.route("/exit")
def index_exit():
    pid = os.getpid()
    print("Local Server Exit")
    if 'nt' == os.name:
        # Windows
        os.system(f"taskkill /pid {pid} /f")
    elif 'posix' == os.name:
        # Linux
        os.system(f"kill -9 {pid}")
    return ""


if __name__ == '__main__':
    HOST = config['host']
    PORT = config['port']
    DOMAIN = "http://" + HOST + ":" + str(PORT)

    # 路由信息
    # print(app.url_map)
    for item in app.url_map.iter_rules():
        print(" *", DOMAIN + str(item))
    # end for
    print()

    # 启动应用
    app.run(host=HOST, port=PORT, debug=True)