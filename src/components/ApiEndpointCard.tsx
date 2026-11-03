"use client";

import { useState } from "react";
import { Check, Copy, ChevronDown, ChevronUp, Code2 } from "lucide-react";
import { ApiEndpointDoc } from "../lib/types";

interface ApiEndpointCardProps {
  endpoint: ApiEndpointDoc;
}

export default function ApiEndpointCard({ endpoint }: ApiEndpointCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const curlCommand = `curl -X ${endpoint.method} "https://api.propmark.com.au${endpoint.path}" \\
  -H "Authorization: Bearer pm_live_99a81f332" \\
  -H "Accept: application/json"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodBadgeClass = (method: string) => {
    return method === "GET"
      ? "bg-blue-50 text-accent-blue border-blue-200"
      : "bg-emerald-50 text-accent-emerald border-emerald-200";
  };

  return (
    <div className="card-editorial p-5 hover:border-ink-30 transition-all">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <span
            className={`px-2.5 py-1 text-xs font-mono font-bold rounded border ${getMethodBadgeClass(
              endpoint.method
            )}`}
          >
            {endpoint.method}
          </span>
          <code className="text-sm font-mono font-bold text-ink">
            {endpoint.path}
          </code>
        </div>
        <span className="eyebrow-mono text-xs self-start sm:self-auto">
          /{endpoint.category.toLowerCase()}
        </span>
      </div>

      <h5 className="font-bold text-base text-ink mb-1">
        {endpoint.summary}
      </h5>
      <p className="text-xs text-ink-60 leading-relaxed mb-4">
        {endpoint.description}
      </p>

      {/* Parameters Table */}
      {endpoint.parameters && endpoint.parameters.length > 0 && (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-10 rounded-lg overflow-hidden">
            <thead className="bg-surface-light border-b border-ink-10 font-mono text-ink-60">
              <tr>
                <th className="py-2 px-3">Parameter</th>
                <th className="py-2 px-3">Type</th>
                <th className="py-2 px-3">Required</th>
                <th className="py-2 px-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-5">
              {endpoint.parameters.map((param, i) => (
                <tr key={i} className="hover:bg-ink-5">
                  <td className="py-2 px-3 font-mono font-medium text-ink">
                    {param.name}
                  </td>
                  <td className="py-2 px-3 font-mono text-ink-60">{param.type}</td>
                  <td className="py-2 px-3">
                    {param.required ? (
                      <span className="text-[10px] font-mono text-accent-red font-bold">
                        REQUIRED
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-ink-40">optional</span>
                    )}
                  </td>
                  <td className="py-2 px-3 text-ink-80">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* cURL snippet & Collapsible JSON Response */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-ink-60 px-1">
          <span>Example Request</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-black transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy cURL"}</span>
          </button>
        </div>

        <div className="p-3 bg-[#1e1e1e] text-[#f7f7f5] rounded-xl text-xs font-mono overflow-x-auto">
          <pre>{curlCommand}</pre>
        </div>

        {/* Toggle Response Preview */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-mono text-accent-blue hover:underline flex items-center gap-1 pt-1"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>{expanded ? "Hide Response Payload" : "Inspect Sample 200 OK Response"}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {expanded && (
          <div className="p-4 bg-surface-light border border-ink-10 rounded-xl text-xs font-mono overflow-x-auto text-ink animate-in slide-in-from-top-1">
            <pre>{JSON.stringify(endpoint.responseExample, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
