import { collections } from '@/collections'
import Collection from '@/components/Collection'

export default function Categories() {
  return (
    <>
      <div className='bg-neutral-700 h-40 lg:my-20 sm:my-16 my-12 text-5xl flex items-center justify-center tracking-wider'>
        Коллекции
      </div>
      <div className='grid md:grid-cols-3 ssm:grid-cols-2 gap-10 container'>
        {collections.map((collection) => (
          <Collection collection={collection} />
        ))}
      </div>
    </>
  )
}
