import styles from "./page.module.css";
import { RadioSelector } from "@/components/radioButtonSelector";
import RangeSelectorContainer from "@/components/ui/rangeSelector";
import { SelectorLayout } from "@/components/ui/layout.tsx/SelectorLayout";

export default function Home() {
  return (
    <main className={styles.main}>
      <SelectorLayout>
        <RangeSelectorContainer range={6} label="rows" />
        <RangeSelectorContainer range={6} label="columns" />
        <RadioSelector />
      </SelectorLayout>
    </main>
  );
}
