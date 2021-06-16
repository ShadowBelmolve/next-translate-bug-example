import NextLink from 'next/link';

export default function SetupInitial() {
  return (
    <NextLink
      href={{
        pathname: `/[foo]/[bar]/b`,
        query: {
          foo: `foo`,
          bar: `bar`,
        },
      }}
      as="/foo/b"
    >
      B
    </NextLink>
  );
}

SetupInitial.getInitialProps = () => ({
  props: {},
});
