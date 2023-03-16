import React, { useMemo } from "react";
import { useParams, useLocation } from 'react-router-dom';

export function Post() {
  const params = useParams();
  const { search } = useLocation();

  // Só criará uma nova instância caso o valor do search mudar
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(queryParams.get('meuQueryParam'));
  console.log(params);

  return <h1>Post page</h1>
}
