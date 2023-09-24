from ultralytics import YOLO

model = YOLO('yolov8n-cls.pt')

results = model.train(data='/Users/dinu/Desktop/yolo/data', epochs=20)