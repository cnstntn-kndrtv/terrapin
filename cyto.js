var frameStyle = {
    frameWidth: 50,
    propHeight: 25,
    headerHeight: 25,
    connectorRadius: 10,
    backgroundColor: 'lightgray',
}

var layout = {
        name: 'preset',
        fit: true, // whether to fit to viewport
        padding: 30, // padding on fit

    }

var style = [
    {
            selector: 'node',
            style: {
                shape: 'hexagon',
                'color': 'red'
            }
        },
    {
            selector: ':parent',
            style: {
                'content': 'data(id)',
                'background-opacity': 0.6
            }
        },
    {
            selector: 'edge',
            style: {
                'content': 'data(id)',
            }
    }
]

var x = 100
var y = 100

var graph = [
    {
        data: {
            id: 'subject-1_frame',
        },
        position: {
            x: x,
            y: y
        },
        style: {
            'background-color': frameStyle.backgroundColor,
            shape: 'rectangle',
            width: frameStyle.width * 100,
        }
    },
    {
        data: {
            id: 'subject-2_frame',
        },
        position: {
            x: x,
            y: y
        },
        style: {
            'background-color': 'red',
            shape: 'rectangle',
            width: frameStyle.width * 20,
        }
    },
    {
        data: {
            id: 'subject-1',
            parent: 'subject-1_frame',
        },
        style: {
            'background-color': 'green',
            shape: 'ellipse',
            width: frameStyle.connectorRadius,
            height: frameStyle.connectorRadius, 
        }
    },
    {
        data: {
            id: 'object1-1',
            parent: 'subject-1_frame',
        },
        position: {
            x: frameStyle.frameWidth - frameStyle.connectorRadius,
            y: frameStyle.headerHeight + 1 * frameStyle.propHeight
        },
        style: {
            'background-color': 'cyan',
            shape: 'ellipse',
            width: frameStyle.connectorRadius,
            height: frameStyle.connectorRadius,
        }
    },
]
    
var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: graph,
    layout: layout,
    // style: style,
    
});
