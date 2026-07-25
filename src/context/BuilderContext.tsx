import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { productMap } from "../utils/productMap";

type Camera = {
  id: string;
  variant: string;
  quantity: number;
};

type Product = {
  id: string;
  quantity: number;
};

type Plan = {
  id: string;
};

type BuilderContextType = {
  openStep: number;
  setOpenStep: Dispatch<SetStateAction<number>>;

  cameras: Camera[];
  setCameras: Dispatch<SetStateAction<Camera[]>>;

  selectedCameraVariants: SelectedCameraVariant[];
  setSelectedCameraVariants: Dispatch<SetStateAction<SelectedCameraVariant[]>>;

  sensors: Product[];
  // setSensors: Dispatch<SetStateAction<Product[]>>;

  accessories: Product[];
  // setAccessories: Dispatch<SetStateAction<Product[]>>;

  plans: Plan[];
  // setPlans: Dispatch<SetStateAction<Plan[]>>;

  NextStep: () => void;
  selectCameraVariant: (productId: string, variant: string) => void;

  increaseCameraQuantity: (productId: string) => void;

  decreaseCameraQuantity: (productId: string) => void;

  getSelectedCameraVariant: (productId: string) => string | undefined;

  getCameraQuantity: (productId: string) => number;

  getTotals: () => {
    total: number;
    compareTotal: number;
    savings: number;
  };
};

const initialCameras = [
  {
    id: "cam-v4",
    variant: "white",
    quantity: 2,
  },
  {
    id: "cam-pan-v3",
    variant: "white",
    quantity: 1,
  },
];

type SelectedCameraVariant = {
  id: string;
  variant: string;
};

const initialSelectedCameraVariants: SelectedCameraVariant[] = [
  {
    id: "cam-v4",
    variant: "white",
  },
  {
    id: "cam-pan-v3",
    variant: "white",
  },
];

const initialSensors = [
  {
    id: "motion-sensor",
    quantity: 2,
  },
  {
    id: "sense-hub",
    quantity: 1,
  },
];

const initialAccessories = [
  {
    id: "micro-sd",
    quantity: 2,
  },
];

const initialPlans = [
  {
    id: "cam-unlimited",
  },
];

const BuilderContext = createContext<BuilderContextType | null>(null);

function BuilderProvider({ children }: { children: ReactNode }) {
  const [openStep, setOpenStep] = useState(1);
  const [cameras, setCameras] = useState(initialCameras);
  const [selectedCameraVariants, setSelectedCameraVariants] = useState(
    initialSelectedCameraVariants,
  );
  const [sensors] = useState(initialSensors);
  const [accessories] = useState(initialAccessories);
  const [plans] = useState(initialPlans);

  function NextStep() {
    setOpenStep((s) => Math.min(s + 1, 4));
  }

  function selectCameraVariant(productId: string, variant: string) {
    setSelectedCameraVariants((prev) => {
      const exists = prev.find((camera) => camera.id === productId);

      if (exists) {
        return prev.map((camera) =>
          camera.id === productId ? { ...camera, variant } : camera,
        );
      }

      return [...prev, { id: productId, variant }];
    });
  }

  function increaseCameraQuantity(productId: string) {
    const selected = selectedCameraVariants.find(
      (camera) => camera.id === productId,
    );

    if (!selected) return;

    setCameras((prev) => {
      const exists = prev.find(
        (camera) =>
          camera.id === productId && camera.variant === selected.variant,
      );

      if (exists) {
        return prev.map((camera) =>
          camera.id === productId && camera.variant === selected.variant
            ? { ...camera, quantity: camera.quantity + 1 }
            : camera,
        );
      }

      return [
        ...prev,
        {
          id: productId,
          variant: selected.variant,
          quantity: 1,
        },
      ];
    });
  }

  function decreaseCameraQuantity(productId: string) {
    const selected = selectedCameraVariants.find(
      (camera) => camera.id === productId,
    );

    if (!selected) return;

    setCameras((prev) => {
      const camera = prev.find(
        (item) => item.id === productId && item.variant === selected.variant,
      );

      if (!camera) return prev;

      if (camera.quantity === 1) {
        return prev.filter(
          (item) =>
            !(item.id === productId && item.variant === selected.variant),
        );
      }

      return prev.map((item) =>
        item.id === productId && item.variant === selected.variant
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  }

  function getSelectedCameraVariant(productId: string) {
    return selectedCameraVariants.find((camera) => camera.id === productId)
      ?.variant;
  }

  function getCameraQuantity(productId: string) {
    const selected = selectedCameraVariants.find(
      (camera) => camera.id === productId,
    );

    if (!selected) return 0;

    return (
      cameras.find(
        (camera) =>
          camera.id === productId && camera.variant === selected.variant,
      )?.quantity ?? 0
    );
  }

  function getTotals() {
    let total = 0;
    let compareTotal = 0;

    // Cameras
    for (const camera of cameras) {
      const product = productMap[camera.id];

      total += product.price * camera.quantity;

      if (product.comparePrice) {
        compareTotal += product.comparePrice * camera.quantity;
      }
    }

    // Sensors
    for (const sensor of sensors) {
      const product = productMap[sensor.id];

      total += product.price;

      if (product.comparePrice) {
        compareTotal += product.comparePrice;
      }
    }

    // Accessories
    for (const sensor of accessories) {
      const product = productMap[sensor.id];

      total += product.price;

      if (product.comparePrice) {
        compareTotal += product.comparePrice;
      }
    }

    // Plans
    for (const sensor of plans) {
      const product = productMap[sensor.id];

      total += product.price;

      if (product.comparePrice) {
        compareTotal += product.comparePrice;
      }
    }

    return {
      total,
      compareTotal,
      savings: total - compareTotal,
    };
  }

  return (
    <BuilderContext.Provider
      value={{
        openStep,
        setOpenStep,
        NextStep,
        cameras,
        selectedCameraVariants,
        setSelectedCameraVariants,
        setCameras,
        sensors,
        accessories,
        plans,
        selectCameraVariant,
        increaseCameraQuantity,
        decreaseCameraQuantity,
        getSelectedCameraVariant,
        getCameraQuantity,
        getTotals,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

function useBuilder() {
  const context = useContext(BuilderContext);

  if (!context)
    throw new Error("useBuilder must be used within BuilderProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { BuilderProvider, useBuilder };
