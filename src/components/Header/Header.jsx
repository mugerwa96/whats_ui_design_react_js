// import {Camera} from 'react-icons/ci'
import{GrGroup} from 'react-icons/gr';
import{AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineCamera} from 'react-icons/ai'
import {TbAntennaBars1} from 'react-icons/tb';
import { IconHeader } from './IconHeader';
import { ItemHeader } from './ItemHeader';
export const Header=()=>{
    
    const menu=['Chats','Status','Calls'];
    return(
        <div className='bg-green-800 h-28 p-3'>
            {/* flex__container */}
            <div className=' flex flex-row  p-2  items-center justify-between'>

                    {/* left__side */}
                    <div>
                        <h1 className='font-bold text-white text-xl'>WhatsApp</h1>
                    </div>

                    {/* right__side */}
                    <div>   
                        {/*flex__container */}
                        <div className='flex items-center justify-center gap-3'>
                            <IconHeader icon={<AiOutlineCamera/>}/>
                            <IconHeader icon={<AiOutlineSearch/>}/>
                            <IconHeader icon={<TbAntennaBars1/>}/>
                        </div>
                    </div>
            </div>


            {/* header__bottom */}
            <div>
                {/* items */}
                <ul className='flex justify-between items-center mt-3 px-3'>
                    
                    <li><GrGroup/></li>
                    {
                        menu.map((item)=>{
                            return(
                            <ItemHeader key={item}  name={item}/>
                            )
                        })
                    }
                
                </ul>
            </div>
        </div>
    )
}