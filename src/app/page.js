import Image from 'next/image'
// import Dash from '../../component/dash/page'
// import Dash from './component/page'
import Dash from './component/dash/page'
import Header from './component/dash/header/page'
export default function Home() {
  return (
    <main className=" flex ">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800&family=Inter:wght@100;200;300;400;500;600;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800&display=swap" rel="stylesheet"></link>
          <Dash></Dash>
<Header></Header>
        </main>
        )
}
