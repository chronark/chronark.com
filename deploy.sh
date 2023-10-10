echo "Building Docker Image ..."
sudo docker-compose build

echo "Running Docker Container ..."
sudo docker-compose -f docker-compose.yml up -d