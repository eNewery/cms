import { useUser } from "./context"

export default function () {
    const { modalContent, setIsModal } = useUser()
    return (
        <div className="modalContainer">
            {
                modalContent === "languageM" ?
                <div className="modalContent">
                <div>
                    <div className="modalTitle">
                    <h2>Create Language</h2>
                <img onClick={() => setIsModal(false)} src="./close.png" alt="" />
                    </div>
                    <div>
                    <input type="text" placeholder="Language name" /><input type="text" placeholder="Language code" />
                    </div>
                    <button>Create</button>
                </div>
            </div>
                    : modalContent === "categoryM" ?
                        <div className="modalContent">
                            <div>
                                <div className="modalTitle">
                                <h2>Create Category</h2>
                            <img onClick={() => setIsModal(false)} src="./close.png" alt="" />
                                </div>
                                <div>
                                <input type="text" placeholder="Category name" /><input type="text" placeholder="Category code" />
                                </div>
                                <button>Create</button>
                            </div>
                        </div>
                        : modalContent === "questionM" ?
                        <div className="modalContent">
                            <div>
                                <div className="modalTitle">
                                <h2>Make a Question</h2>
                            <img onClick={() => setIsModal(false)} src="./close.png" alt="" />
                                </div>
                                <div>
                                <input type="text" /><input type="text" />
                                </div>
                                <button>Create</button>
                            </div>
                        </div>
                            : ""
            }

        </div>
    )
}