import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import coverImg from "../../assets/LoRA_QLoRA_Blog-1.png"

const LoRA_QLoRA_Blog = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div className="flex-grow px-4 sm:px-6 md:px-12 lg:px-32 py-10 sm:py-16 text-white">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            LoRA and QLoRA: Efficient Fine-Tuning
          </h1>
          <div className="text-sm text-gray-300">
            <span>By Ishan Apte</span> • <span>Jul 7, 2025</span>
          </div>
        </header>

        <div className="w-full flex justify-center mb-10">
          <div className="max-w-4xl px-4">
            <img
              src={coverImg}
              alt="Blog Cover"
              className="rounded-lg shadow-lg w-full max-h-72 sm:max-h-96 object-cover"
            />
          </div>
        </div>

        <article className="prose prose-invert prose-lg max-w-3xl mx-auto text-justify">

          <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 mb-4">Introduction</h2>
              <p>Large language models like GPT-3 are powerful but extremely resource-intensive, with sizes reaching hundreds of gigabytes due to billions of high-precision weights. To make fine-tuning feasible, engineers use techniques like quantization to reduce model size and LoRA (Low-Rank Adaptation) to update only a small portion of the model’s parameters. An improved version, QLoRA, combines both ideas for even greater efficiency. In this blog, we’ll explore how these methods work and why they matter for practical, scalable fine-tuning.</p>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 mb-4">Understanding Precision</h2>
              <p>Before we dive deep into LoRA, let’s discuss precision. Every model has a weight matrix associated with it, and the number of weights equals the number of parameters. For instance, the original GPT-3 175B model has 175 billion parameters, each represented by float32 (32 bits), making the model approximately 700 GB in size (175B × 32 bits ÷ 8 = 700 GB).</p>

              <p>To reduce model size, engineers often opt for lower precision types, such as float16 or int4, effectively halving or quartering the model size. However, this reduces the information each weight represents, potentially impacting model performance.</p>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 mb-4">Quantization: Reducing Model Size</h2>
              <p>Engineers have developed quantization to reduce model size with minimal accuracy loss. Quantization works by representing weights using lower-precision values (e.g., 8-bit or 4-bit instead of 32-bit), employing scaling factors to map high-precision values into a reduced range.</p>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 mb-4">LoRA: Parameter-Efficient Fine-Tuning (PEFT)</h2>
              <p>Reducing model size with techniques like quantization is beneficial, but LoRA fine-tuning offers a more robust alternative. LoRA belongs to the class of Parameter Efficient Fine Tuning (PEFT), updating only a small subset of model parameters. Unlike full fine-tuning, which updates all weights and is extremely resource-intensive, LoRA significantly reduces compute and memory costs.</p>

              <p>The standard update equation is <code>W_new = W_old + ΔW</code>. In LoRA, instead of learning the full ΔW, it is decomposed into smaller low-rank matrices A and B such that <code>ΔW ≈ A × B</code>. These matrices are smaller, reducing costs. The full ΔW is reconstructed on-the-fly during training or inference, providing efficient updates with negligible precision loss.</p>

              <p>Precision loss in LoRA can be further reduced by increasing the rank of the decomposition. For instance, approximating a 10×10 matrix with rank-1 decomposition (two matrices of sizes 1×10 and 10×1) requires only 20 parameters. Increasing to rank-2 (matrices of sizes 2×10 and 10×2) increases parameters to 40 but yields better approximations.</p>

              <p>At scale—for example, a 7 billion-parameter model—a rank-512 decomposition reduces trainable parameters to around 86 million, only 1.22% of the original size.</p>

              <p>Choosing the optimal rank depends on the task. Lower ranks often suffice for simple tasks with constrained hardware, while higher ranks can improve performance at the cost of additional memory and compute.</p>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 mb-4">QLoRA: Combining LoRA and Quantization</h2>
              <p>QLoRA improves LoRA by fine-tuning large language models with significantly less memory. It applies LoRA adapters to models compressed via 4-bit quantization, keeping high performance despite quantization. Key insights from QLoRA include:</p>
              <ul>
                  <li>Applying LoRA adapters to all layers improves results.</li>
                  <li>Rank settings between 8 and 256 usually work well, with 64 as a default.</li>
                  <li>The alpha setting scales LoRA updates; QLoRA sets it to <code>rank ÷ 4</code>.</li>
                  <li>Dropout regularizes training: use 0.1 for smaller models (7B-13B) and 0.0 for larger models (33B–65B).</li>
              </ul>

              <p>The three main settings to tune in QLoRA are rank, alpha, and dropout.</p>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-8 mb-4">Next Steps</h2>
              <p>Stay tuned as we transition from theory to practice. In the next section, we'll provide a hands-on implementation of LoRA and QLoRA, guiding you step-by-step through efficiently fine-tuning large models on limited hardware.</p>
          </section>

          <hr className="my-10 border-t border-gray-600" />
          <ol>
            <li>
              <a href="https://www.youtube.com/watch?v=t1caDsMzWBk&t=607s&pp=ygUNd2hhdCBpcyBRbG9yYQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
                  LoRA & QLoRA Fine-tuning Explained In-Depth
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=t509sv5MT0w&t=738s" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
                LoRA explained (and a bit about precision and quantization)
              </a>
            </li>
          </ol>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default LoRA_QLoRA_Blog;
