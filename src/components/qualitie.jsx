const Qualitie = ({ qualitie }) => {
    const classes = "badge rounded-pill m-1 ";
    return (
        <span className={classes + "bg-" + qualitie.color}>
            {qualitie.name}
        </span>
    );
};

export default Qualitie;
