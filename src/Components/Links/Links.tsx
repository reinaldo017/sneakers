import "./links.scss"

type LinksProps = {
  linksNames: string[]
  mode: string
}

const Links = ({ linksNames, mode }: LinksProps) => {
  return (
    <ul className={`links links--${mode}`}>
      {linksNames.map((linkName) => (
        <li className={`links__li links__li--${mode}`} key={linkName}>
          <a className={`links__a links__a--${mode}`} href='/'>
            {linkName}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links
