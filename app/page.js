const { Fragment } = require("react")
import { Button } from "@/components/ui/button"
import Link from "next/link";

const homePage = () => {

    return <Fragment>
        <div className=" h-full flex items-center gap-6 flex-col ">
            <header>
                <h1 className='text-3xl'>The all new <strong>Day Manager</strong> app </h1>
            </header>
            <section className="flex flex-col items-center gap-6">
                <p>Click on the button to redirect to <em>managing</em> your day</p>
                <Button><Link href='/today'>Manage Day!!</Link></Button>
            </section>
        </div>
    </Fragment>
}

export default homePage;