"use client"
import NavBar from "../../components/NavBar";
import SharedImages from "../../components/SharedImages";


const SharedImagesView: React.FC = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <div className="flex-container mx-6 font-mono" >
                <SharedImages />
            </div>
       </div>
    );
};

export default SharedImagesView;

