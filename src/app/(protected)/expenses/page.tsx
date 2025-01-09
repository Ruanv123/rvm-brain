import { PageTitle } from "@/components/page-title";

export default function ExpensesPage() {
  return (
    <div>
      <PageTitle
        title="Despesas"
        description="Despesas agrupadas mensalmente"
      />

      <section>
        <p>filtros</p>
      </section>

      <section>
        <p>data table</p>
      </section>
    </div>
  );
}
