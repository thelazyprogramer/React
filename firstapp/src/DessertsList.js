    function DessertsList(props) {
    let data;
    if (props.data) {
        data = props.data;
        let sortedData = data
        .filter((item) => item.calories <= 500)
        .sort((a, b) => a.calories - b.calories)
        .map((item) => {
            const itemStr = `${item.name} - ${item.calories}`;
            return <li>{itemStr}</li>;
        });
        data = sortedData;
    }
    return <ul>{data}</ul>;
    }

    export default DessertsList;
