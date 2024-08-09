import Link from "next/link"

function MenuItem( {navigations} ) {
//   const navigations = [{
//     title:"Home",
//     href:"/"
//   },
// {
//   title:"About",
//   href:"/about"
// }]
  // return (
  //   <Link href={address}>
  //   <Icon />
    
  //   <p>{title}</p>
  //   </Link>
  // )

  return(
    navigations.map((item)=>(
      <Link key={item.title} href={item.href}>
        {item.title}
      </Link>
    ))
  )
}


export default MenuItem