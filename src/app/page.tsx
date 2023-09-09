import RangeSelector, { RangeItem } from "@/components/ui/rangeSelector";
import styles from "./page.module.css";
import { SelectorItems } from "@/components/radioButtonSelector";

export default function Home() {
  return (
    <main className={styles.main}>
      <RangeSelector range={6} name="Rows" />
      <SelectorItems value="Test" />
    </main>
  );
}
