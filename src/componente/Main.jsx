import UserCard from "./UserCard"

function Main() {
    return (
        <main className='p-4 grow'>
            <h2>Home</h2>
            <Button>Precioname</Button>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

                <UserCard
                 product={Nike}
                 modelo={tiempo}
                 talle={39}
                />
                <UserCard 
                 product={Nike}
                 modelo={tiempo}
                 talle={39}
                />

                <UserCard 
                 product={Nike}
                 modelo={tiempo}
                 talle={39}
                />
            </section>
        </main>
    )
}

export default Main