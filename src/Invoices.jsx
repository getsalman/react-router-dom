import React from "react";
import { Link } from "react-router-dom";
import getInvoices from "./data";

const Invoices = () => {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <main style={{ padding: "1rem 0" }}>
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Invoices;
