import { fictionalReviews } from "."

function Review() {
    return (
        <div className="flex justify-center items-center content-center">
            <div className="m-2 border-1 outline-2 outline-neutral-300 -outline-offset-3 border-neutral-400 rounded-2xl shadow-sm/70 lg:w-[50vw] content-center">
                <h2 className="text-center justify-center flex border-b-2 border-neutral-400 my-0 py-5">Customer Testimony</h2>
                <div className="h-72 overflow-y-auto ">
                    {fictionalReviews.map((review, indexReview) => (
                        <div key={indexReview} className="flex flex-row py-2 border-t-2 border-neutral-400">
                            <div className="h-20 w-20 mx-2">
                                <img src={`${review.portrait}`} className="h-[80px] w-[80px] rounded-full bg-center bg-cover outline-2 outline-offset-2 outline-sky-500/50" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-center lg:text-start lg:text-2xl">{review.name}</h3>
                                <p className="text-justify mx-2">
                                    <span className="text-4xl">"</span>
                                    <span className="text-sky-800 lg:text-3xl">{review.comment}</span>
                                    <span className="flex text-4xl justify-end">"</span>
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
export default Review