from ultralytics import YOLO

model = YOLO('yolov8n-cls.pt')

results = model.train(data='/yolo/data', epochs=50)