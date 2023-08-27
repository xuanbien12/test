
import { Link } from 'react-router-dom'
const NavbarHome = (props: any) => {
    const { img, name, link, position, bg, img2 } = props.item
    return (
        <li>
            <Link to={link} className='flex items-center gap-[10px] hover:rounded-[10px] hover:bg-[#e4e6e8] font-[Semibold] '>
                {
                    img && <img src={img} alt="" />
                }

                {
                    !img2 && !bg && !img && <i style={{ backgroundPosition: `${position}` }} className={` inline-block bg-auto bg-no-repeat   w-9 h-9 bg-[url("https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png")]`}></i>

                }
                {
                    !img2 && !img && bg && !img && <i style={{ backgroundPosition: `${position}` }} className={` inline-block bg-auto bg-no-repeat   w-9 h-9 bg-[url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/67wnEAsdF3s.png")]`}></i>
                }
                {
                    img2 && !img && !bg && !img && <i style={{ backgroundPosition: `${position}` }} className={` inline-block bg-auto bg-no-repeat   w-9 h-9 bg-[url("https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/z3JoyCWlf8g.png")]`}></i>
                }

                <span className='p-4 '>{name}</span>

            </Link>

        </li >
    )
}
export default NavbarHome