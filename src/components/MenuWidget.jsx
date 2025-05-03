const MenuWidget = ({image, headingText, text, onClick}) => {
    return (
        <div
            onClick={onClick}
            className="flex items-center p-4 rounded-lg bg-white cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100 border border-transparent hover:border-gray-300"
            style={{
                display: 'flex',
                alignItems: 'center', // centers image and text vertically
                padding: '12px',
                margin: '8px 0',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                backgroundColor: '#fff'
            }}
        >
            <div
                className="imageContainer"
                style={{
                    marginRight: '16px',
                    flexShrink: 0
                }}
            >
                <img
                    src={image}
                    alt="Menu item"
                    style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        borderRadius: '4px'
                    }}
                />
            </div>
            <div className="textContent" style={{flex: 1}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h3
                        style={{
                            fontWeight: '600',
                            margin: '0 0 6px 0',
                            fontSize: '15px',
                            lineHeight: '1.3'
                        }}
                    >
                        {headingText}
                    </h3>
                    <p
                        style={{
                            margin: 0,
                            color: '#4B5563',
                            fontSize: '13px',
                            lineHeight: '1.4'
                        }}
                    >
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuWidget;
