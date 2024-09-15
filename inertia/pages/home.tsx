import { Head, Link } from '@inertiajs/react'

export default function Home(props: { version: number; user?: { email: string } }) {
  const { user } = props
  return (
    <>
      <Head title="Homepage" />
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          borderBottom: '1px solid',
        }}
      >
        <h1>Homepage</h1>
        <nav
          style={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <ul
            style={{
              display: 'flex',
              gap: '1rem',
              listStyle: 'none',
              alignItems: 'center',
            }}
          >
            <li>
              <Link href="/logout" method="post" as="button">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="title">You are logged in as {user?.email}</div>
      </div>
    </>
  )
}
