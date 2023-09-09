import RangeSelector, { RangeItem } from "@/components/ui/rangeSelector";
import styles from "./page.module.css";
import { RadioSelector, SelectorItems } from "@/components/radioButtonSelector";
import { SelectorLayout } from "@/components/ui/layout.tsx/SelectorLayout";

export default function Home() {
  return (
    <main className={styles.main}>
      <SelectorLayout>
        <RangeSelector range={6} name="Rows" />
        <RangeSelector range={6} name="columns" />
        <RadioSelector />
      </SelectorLayout>
    </main>
  );
}
