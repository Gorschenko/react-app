const SearchStatus = ({ usersLength }) => {
    return (
        <h1>
            {usersLength
                ? "Количество людей на вечеринке " + usersLength
                : "Никто не прийдет"}
        </h1>
    );
};

export default SearchStatus;
