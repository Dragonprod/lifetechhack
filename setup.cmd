echo "Installing backend..."
cd backend && pip install -r requirements.txt
cd..
echo "Backend installation done"

echo "Installing frontend..."
cd frontend && npm install

echo "Frontend installation done"