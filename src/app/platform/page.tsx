import { Slide } from "@/components/slide";
import { Footer } from "@/components/footer";
import { platformFeatures, securityFeatures } from "@/lib/data";

export default function PlatformPage() {
  return (
    <main>
      <div data-slide>
        <Slide title="Архитектура платформы" kicker="Platform">
          <ul className="list-disc pl-6 space-y-2">
            {platformFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Безопасность и комплаенс" kicker="Security">
          <ul className="list-disc pl-6 space-y-2">
            {securityFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </Slide>
      </div>

      <div data-slide>
        <Slide title="Технический стек" kicker="Stack">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="text-sm space-y-1">
                <li>• Python 3.11+</li>
                <li>• FastAPI / Django</li>
                <li>• PostgreSQL / Redis</li>
                <li>• Docker / Kubernetes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">AI/ML</h3>
              <ul className="text-sm space-y-1">
                <li>• PyTorch / TensorFlow</li>
                <li>• Transformers</li>
                <li>• ONNX Runtime</li>
                <li>• CUDA / ROCm</li>
              </ul>
            </div>
          </div>
        </Slide>
      </div>

      <Footer />
    </main>
  );
}
