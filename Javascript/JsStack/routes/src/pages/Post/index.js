import React from "react";

export class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  render() {
    console.log(this.queryParams.get('meuQueryParam'));

    return <h1>Post page</h1>
  }
}

// export function Post() {
//   const params = useParams();
//   const { search } = useLocation();

//   // Só criará uma nova instância caso o valor do search mudar
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log(queryParams.get('meuQueryParam'));
//   console.log(params);

//   return <h1>Post page</h1>
// }
