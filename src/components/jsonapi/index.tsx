import { JsonApiClient } from 'drupal-canvas';
// import { DrupalJsonApiParams } from 'drupal-jsonapi-params';
import useSWR from 'swr';

const client = new JsonApiClient();

export default function List() {
  const { data, error, isLoading } = useSWR(
    [
      'page',
      {
        // queryString: new DrupalJsonApiParams()
        //   .addInclude(['field_tags'])
        //   .getQueryString(),
      },
    ],
    ([type, options]) => client.getCollection(type, options),
  );

  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';
  return (
    <ul>
      {data.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}