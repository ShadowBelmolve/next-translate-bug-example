import NextLink from 'next/link';

export default function SetupInitial() {
  return (
    <NextLink
      href={{
        pathname: `/[foo]/[bar]/a`,
        query: {
          foo: `foo`,
          bar: `bar`,
        },
      }}
      as="/foo/a"
    >
      A
    </NextLink>
  );
}

SetupInitial.getInitialProps = () => ({
  props: {},
});
