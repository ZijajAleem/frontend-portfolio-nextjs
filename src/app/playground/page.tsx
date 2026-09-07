import Disclosure from "./Disclosure";
import Tabs from "./Tabs";
import Modal from "./Modal";

export default function PlaygroundPage() {
  return (
    <main>
      <h1>Accessibility Playground</h1>

      <h2>Disclosure</h2>
      <Disclosure />

      <h2>Tabs</h2>
      <Tabs />

      <h2>Modal</h2>
      <Modal />
    </main>
  );
}