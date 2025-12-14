import { RotateCcw } from "lucide-react";
import { Button } from "./button";

interface ThreeDViewProps {
  updateView: (isOpen: boolean) => void;
}

function ThreeDView({ updateView }: ThreeDViewProps) {
  const handleUpdateView = () => {
    updateView(false);
  };
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-5xl mx-4">
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-4 right-4 z-10"
          onClick={() => handleUpdateView()}
        >
          Close
        </Button>
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <RotateCcw
            className="h-16 w-16 text-white mx-auto mb-4 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <p className="text-white text-lg">360° View</p>
          <p className="text-gray-400 mt-2">Drag to rotate the vehicle</p>
          <div className="mt-6 aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <iframe
              className="w-full h-full"
              title="Bugatti Veyron"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/2d6b0584741b414692b71601b09cccb9/embed"
            >
              {" "}
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeDView;
