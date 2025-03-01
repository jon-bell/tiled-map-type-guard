import { ITiledMapProperty, ITiledMapTile, upgradeMapToNewest } from '../../src/index';
import { ITiledMapChunk } from '../../src/index';
import { ITiledMapTileLayer } from '../../src/index';
import { ITiledMapLayer } from '../../src/index';
import { ITiledMapObjectLayer } from '../../src/index';
import { ITiledMapImageLayer } from '../../src/index';
import { ITiledMap } from '../../src/index';
import { ITiledMapTileset } from '../../src/index';
import { ITiledMapGroupLayer } from '../../src/index';

const map = {
  compressionlevel: -1,
  height: 10,
  infinite: false,
  layers: [
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
      ],
      height: 10,
      id: 1,
      name: 'start',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 10,
      x: 0,
      y: 0,
    },
    {
      data: [
        33, 34, 34, 34, 34, 34, 34, 34, 34, 35, 41, 42, 42, 42, 42, 42, 42, 42, 42, 43, 41, 42, 42,
        42, 42, 42, 42, 42, 42, 43, 41, 42, 42, 42, 42, 42, 42, 42, 42, 43, 41, 42, 42, 42, 42, 42,
        42, 42, 42, 43, 41, 42, 42, 42, 42, 42, 42, 42, 42, 43, 41, 42, 42, 42, 42, 42, 42, 42, 42,
        43, 41, 42, 42, 42, 42, 42, 42, 42, 42, 43, 41, 42, 42, 42, 42, 42, 42, 42, 42, 43, 49, 50,
        50, 50, 50, 50, 50, 50, 50, 51,
      ],
      height: 10,
      id: 2,
      name: 'bottom',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 10,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 116, 116, 116, 116, 0, 0, 0, 0, 0, 0, 116, 116, 116, 116, 0, 0, 0, 0, 0,
        0, 116, 116, 116, 116, 0, 0, 0, 0, 0, 0, 116, 116, 116, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      height: 10,
      id: 4,
      name: 'metadata',
      opacity: 1,
      properties: [
        {
          name: 'openWebsite',
          type: 'string',
          value: 'setProperty.html',
        },
        {
          name: 'openWebsiteAllowApi',
          type: 'bool',
          value: true,
        },
      ],
      type: 'tilelayer',
      visible: true,
      width: 10,
      x: 0,
      y: 0,
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        89, 89, 89, 89, 89, 0, 0, 0, 0, 0, 89, 89, 89, 89, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      height: 10,
      id: 7,
      name: 'iframeTest',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 10,
      x: 0,
      y: 0,
    },
    {
      draworder: 'topdown',
      id: 5,
      name: 'floorLayer',
      objects: [
        {
          height: 157.325836789532,
          id: 1,
          name: '',
          rotation: 0,
          text: {
            fontfamily: 'Sans Serif',
            pixelsize: 9,
            text: 'Test : \nWalk on the red tiles.\nResult :\nNothing happens.\n\nTest : \nWalk on the grass, an iframe open. Then walk on the red tiles.\nResult : \nAn iframe of Wikipedia open.\n\nTest : \nWalk on the grass again.\nResult : \nAn iframe of Wikipedia open.\n',
            wrap: true,
          },
          type: 'area',
          visible: true,
          width: 305.097705765524,
          x: 15.1244925229277,
          y: 162.846515567498,
        },
      ],
      opacity: 1,
      type: 'objectgroup',
      visible: true,
      x: 0,
      y: 0,
    },
    {
      id: 8,
      layers: [
        {
          draworder: 'topdown',
          id: 9,
          name: 'variables',
          objects: [
            {
              height: 0,
              id: 2,
              name: 'myvar',
              point: true,
              rotation: 0,
              type: 'variable',
              visible: true,
              width: 0,
              x: 104.31868382969,
              y: 69.7082793815218,
            },
          ],
          opacity: 1,
          type: 'objectgroup',
          visible: true,
          x: 0,
          y: 0,
        },
      ],
      name: 'group',
      opacity: 1,
      type: 'group',
      visible: true,
      x: 0,
      y: 0,
    },
  ],
  nextlayerid: 10,
  nextobjectid: 3,
  orientation: 'orthogonal',
  renderorder: 'right-down',
  tiledversion: '1.8.4',
  tileheight: 32,
  tilesets: [
    {
      columns: 8,
      firstgid: 1,
      image: 'tileset_dungeon.png',
      imageheight: 256,
      imagewidth: 256,
      margin: 0,
      name: 'TDungeon',
      spacing: 0,
      tilecount: 15,
      tileheight: 32,
      tiles: [
        {
          id: 0,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 1,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 2,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 3,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 4,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 8,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 9,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 10,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 11,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 12,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },

        {
          id: 16,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 17,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 18,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 19,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 20,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
      ],
      tilewidth: 32,
    },
    {
      columns: 8,
      firstgid: 53,
      image: 'floortileset.png',
      imageheight: 288,
      imagewidth: 256,
      margin: 0,
      name: 'Floor',
      spacing: 0,
      tilecount: 0,
      tileheight: 32,
      tilewidth: 32,
    },
  ],
  tilewidth: 32,
  type: 'map',
  version: '1.8',
  width: 10,
} as ITiledMap;

describe('Test ITiledMapObject upgrade to newest Tiled version', () => {
  it('should pass', () => {
    const newMap = upgradeMapToNewest(map);
    expect(
      (newMap.layers.find((layer) => layer.name === 'floorLayer') as ITiledMapObjectLayer)
        .objects[0].class,
    ).toBe('area');
  });
});

describe('Test ITiledMapProperty type guard', () => {
  it('should pass', () => {
    const property: ITiledMapProperty = {
      name: 'foo',
      type: 'string',
      value: 'hello',
    };
    expect(ITiledMapProperty.parse(property)).toStrictEqual(property);
  });
});

describe('Test ITiledMapChunk type guard', () => {
  it('should pass', () => {
    const property: ITiledMapChunk = {
      data: 'foo',
      height: 42,
      width: 42,
      x: 0,
      y: 0,
    };
    expect(ITiledMapChunk.parse(property)).toStrictEqual(property);
  });

  it('should accept more data', () => {
    const property = {
      data: 'foo',
      height: 42,
      width: 42,
      x: 0,
      y: 0,
      foo: 'bar',
    } as ITiledMapChunk;
    expect(ITiledMapChunk.passthrough().parse(property)).toStrictEqual(property);
  });
});

describe('Test ITiledMapLayer type guard', () => {
  it('should pass', () => {
    const property: ITiledMapTileLayer = {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
      ],
      height: 10,
      id: 1,
      name: 'start',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 10,
      x: 0,
      y: 0,
    };
    expect(ITiledMapLayer.parse(property)).toStrictEqual(property);
    expect(ITiledMapTileLayer.parse(property)).toStrictEqual(property);
    expect(ITiledMapObjectLayer.safeParse(property).success).toBe(false);
  });
});
describe('Test ITiledMapTileset type guard', () => {
  it('should pass', () => {
    const property: ITiledMapTileset = {
      columns: 8,
      firstgid: 1,
      image: 'tileset_dungeon.png',
      imageheight: 256,
      imagewidth: 256,
      margin: 0,
      name: 'TDungeon',
      spacing: 0,
      tilecount: 64,
      tileheight: 32,
      tiles: [
        {
          id: 0,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 1,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 2,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 3,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 4,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 8,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 9,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 10,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 11,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 12,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 16,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 17,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 18,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 19,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
        {
          id: 20,
          properties: [
            {
              name: 'collides',
              type: 'bool',
              value: true,
            },
          ],
        },
      ],
      tilewidth: 32,
    };
    expect(ITiledMapTileset.parse(property)).toStrictEqual(property);
  });
});

describe('Test ITiledMapObjectLayer type guard', () => {
  it('should pass', () => {
    const property: ITiledMapObjectLayer = {
      draworder: 'topdown',
      id: 5,
      name: 'floorLayer',
      objects: [
        {
          height: 157.325836789532,
          id: 1,
          name: '',
          rotation: 0,
          text: {
            fontfamily: 'Sans Serif',
            pixelsize: 9,
            text: 'Test : \nWalk on the red tiles.\nResult :\nNothing happens.\n\nTest : \nWalk on the grass, an iframe open. Then walk on the red tiles.\nResult : \nAn iframe of Wikipedia open.\n\nTest : \nWalk on the grass again.\nResult : \nAn iframe of Wikipedia open.\n',
            wrap: true,
          },
          type: '',
          visible: true,
          width: 305.097705765524,
          x: 15.1244925229277,
          y: 162.846515567498,
        },
      ],
      opacity: 1,
      type: 'objectgroup',
      visible: true,
      x: 0,
      y: 0,
    };
    expect(ITiledMapObjectLayer.parse(property)).toStrictEqual(property);
  });
});

describe('Test ITiledMapTileset animated type guard', () => {
  it('should pass', () => {
    const property: ITiledMapTileset = {
      columns: 8,
      firstgid: 1,
      image: 'animated_tiles.png',
      imageheight: 32,
      imagewidth: 256,
      margin: 0,
      name: 'animated_tiles',
      spacing: 0,
      tilecount: 8,
      tileheight: 32,
      tiles: [
        {
          animation: [
            {
              duration: 100,
              tileid: 0,
            },
            {
              duration: 100,
              tileid: 1,
            },
            {
              duration: 100,
              tileid: 2,
            },
            {
              duration: 100,
              tileid: 3,
            },
            {
              duration: 100,
              tileid: 4,
            },
            {
              duration: 100,
              tileid: 5,
            },
            {
              duration: 100,
              tileid: 6,
            },
            {
              duration: 100,
              tileid: 7,
            },
          ],
          id: 0,
        },
      ],
      tilewidth: 32,
    };
    expect(ITiledMapTileset.parse(property)).toStrictEqual(property);
  });
});

describe('Test ITiledMapObjectLayer type guard', () => {
  it('should pass', () => {
    const property = {
      objects: [
        {
          id: 1,
          name: 'foo',
          type: 'foo',
          point: true,
          x: 1,
          y: 2,
          visible: true,
        },
      ],
      x: 0,
      y: 0,
      name: 'foo',
      id: 1,
      width: 32,
      height: 32,
      opacity: 1,
      visible: true,
      type: 'objectgroup',
    } as ITiledMapObjectLayer;
    expect(ITiledMapLayer.parse(property)).toStrictEqual(property);
    expect(ITiledMapObjectLayer.parse(property)).toStrictEqual(property);
    expect(ITiledMapImageLayer.safeParse(property).success).toBe(false);
  });
});

describe('Test ITiledMapGroupLayer type guard', () => {
  it('should pass', () => {
    const tileLayer = {
      data: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1,
      ],
      height: 10,
      id: 1,
      name: 'floor',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 10,
      x: 0,
      y: 0,
    };

    expect(ITiledMapLayer.parse(tileLayer)).toStrictEqual(tileLayer);

    const property = {
      id: 7,
      layers: [tileLayer],
      name: 'Group 2',
      opacity: 1,
      type: 'group',
      visible: true,
      x: 0,
      y: 0,
    } as ITiledMapGroupLayer;

    expect(ITiledMapGroupLayer.parse(property)).toStrictEqual(property);
    expect(ITiledMapLayer.parse(property)).toStrictEqual(property);
    expect(ITiledMapImageLayer.safeParse(property).success).toBe(false);
  });
});

describe('Test ITiledMap type guard', () => {
  it('should pass', () => {
    expect(ITiledMap.parse(map)).toStrictEqual(map);
  });
});

describe('Test ITiledMapGroupLayer type guard', () => {
  it('should pass', () => {
    const group = map.layers.find((layer) => layer.type === 'group');
    expect(ITiledMapGroupLayer.parse(group)).toStrictEqual(group);
  });
});

describe('Test ITiledMapObjectLayer type guard', () => {
  it('should pass', () => {
    const group = ITiledMapGroupLayer.parse(map.layers.find((layer) => layer.type === 'group'));
    const layer = group.layers[0];

    expect(ITiledMapObjectLayer.parse(layer)).toStrictEqual(layer);
  });
});

describe('Test ITileMapTile objectgroup type guard', () =>{
  it('should pass', () =>{
    const tile = {
      "id":90,
      "objectgroup":
         {
          "draworder":"index",
          "name":"",
          "objects":[
                 {
                  "type":"",
                  "height":28,
                  "id":6,
                  "name":"",
                  "rotation":0,
                  "visible":true,
                  "width":20,
                  "x":0,
                  "y":0
                 }],
          "opacity":1,
          "type":"objectgroup",
          "visible":true,
          "x":0,
          "y":0
         },
      "properties":[
             {
              "name":"collides",
              "type":"bool",
              "value":true
             }]
     };
     ITiledMapTile.parse(tile);
  })
})