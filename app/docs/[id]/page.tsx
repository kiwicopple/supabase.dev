"use client"

export default function Docs({ params }: { params: { id: string } }) {
  switch (params.id) {
    case "supasquad":
      return <SupaSquad />
    default:
      return <div>404</div>
  }
}

function SupaSquad() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold dark:text-white">SupaSquad</h1>
      <p className="my-4 text-lg font-normal text-gray-800 dark:text-gray-400">
        The SupaSquad is an official Supabase advocate program where community
        members help build and manage the Supabase community.
      </p>
      <ul>
        <li>Official recognition in the Supabase community.</li>
        <li>Direct connection to the Supabase team.</li>
        <li>Help steer the Supabase community.</li>
      </ul>

      <h2 className="text-3xl font-extrabold dark:text-white">Requirements</h2>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        As a member of the Squad, you choose the approach where you'll provide
        the most value. You can help in one of five ways:
      </p>

      <h3 className="text-xl font-extrabold dark:text-white">Maintainer</h3>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Help maintain Supabase repositories. This includes building client
        libraries, managing issues, and fixing bugs.
      </p>

      <h3 className="text-xl font-extrabold dark:text-white">Expert</h3>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Answer user questions on GitHub Discussions, Discord, and various other
        social platforms.
      </p>

      <h3 className="text-xl font-extrabold dark:text-white">Advocate</h3>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Spread the word on social channels and help to answer Supabase-related
        questions in the broader community and social channels.
      </p>

      <h3 className="text-xl font-extrabold dark:text-white">Builder</h3>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Build Supabase examples, blog about them, and them add to the Supabase
        Community GitHub Org.
      </p>

      <h3 className="text-xl font-extrabold dark:text-white">Author</h3>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Write guest blog posts, create documentation, and help Supabase global
        expansion through translation.
      </p>

      <h3 className="text-xl font-extrabold dark:text-white">Moderator</h3>
      <p className="my-4 font-normal text-gray-800 dark:text-gray-400">
        Help us maintain the community guidelines in our GitHub and
        Community-led communities such as Discord, Reddit, StackOverflow etc.
      </p>

      <h2 className="text-3xl font-extrabold dark:text-white">
        Benefits for SupaSquad members
      </h2>
      <ul>
        <li>
          Access to a Supabase Discord channel providing direct communication
          with the team, Discord badges, and elevated privileges.
        </li>
        <li>Special AMA sessions with members of the Supabase team.</li>
        <li>
          Monthly DevRel committee call with industry-leading Developer
          Advocates (many of whom are angel investors), where you can learn from
          the best.
        </li>
        <li>
          We'll help you build your audience by promoting content via the
          Supabase social channels.
        </li>
        <li>
          Early access to new features (and the opportunity to provide feedback
          to the team!).
        </li>
        <li>Free credits that you can use for Squad efforts.</li>
        <li>
          Direct access to members of the Supabase team for questions,
          suggestions, etc.
        </li>
        <li>Help shape the future of the program.</li>
        <li>
          Exclusive Supabase Team swag drops usually exclusively reserved to the
          Supabase core team.
        </li>
      </ul>
    </div>
  )
}
