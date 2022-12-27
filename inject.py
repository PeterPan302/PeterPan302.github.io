if __name__ == '__main__':
	content = b''
	with open('index.html', 'rb') as fr:
		content = fr.read()
	with open('index.html', 'wb') as fw:
		fw.write(content.replace(b'<html lang=zh-CN>', b'<html lang=zh-CN manifest=cache.appcache>')
						  .replace(b'<link rel="shortcut icon" type=image/x-icon href=https://cdn.uviewui.com/uview/common/favicon.ico>', 
								   b'<link rel=manifest href=manifest.json><link href=manifest.webmanifest rel=manifest/><link rel="shortcut icon" type=image/x-icon href=static/icons/favicon.ico>'))