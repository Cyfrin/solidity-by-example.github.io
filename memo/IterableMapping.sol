
library IterableMapping {
    // mapping(address => uint) balances;
    struct Map {
        address[] keys;
        mapping(address => uint) values;
        mapping(address => uint) indexOf;
        mapping(address => bool) inserted;
    }

    // NOTE: Map and storage
    // NOTE: not underscored
    // NOTE: public (deployed and linked)
    function set(Map storage map, address key, uint val) public {
        if (map.inserted[key]) {
            map.values[key] = val;
        } else {
            map.inserted[key] = true;
            map.values[key] = val;
            map.indexOf[key] = map.keys.length;
            map.keys.push(key);
        }
    }

    function get(Map storage map, address key) public view returns (uint) {
        return map.values[key];
    }

    function remove(Map storage map, address key) public {
        if (!map.inserted[key]) {
            return;
        }

        delete map.inserted[key];
        delete map.values[key];

        uint index = map.indexOf[key];
        uint lastIndex = map.keys.length - 1;
        address lastKey = map.keys[lastIndex];

        map.indexOf[lastKey] = index;
        delete map.indexOf[key];

        map.keys[index] = lastKey;
        map.keys.pop();
    }

    function size(Map storage map) public view returns (uint) {
        return map.keys.length;
    }

    function getKeyAtIndex(Map storage map, uint index) public view returns (address) {
        return map.keys[index];
    }
}

contract TestIterableMap {
    // NOTE: using for
    using IterableMapping for IterableMapping.Map;

    // NOTE: cannot be public
    IterableMapping.Map private map;

    function testIterableMap() public {
        // NOTE: address must be unique
        // NOTE: first parameter do not need to pass
        map.set(address(0), 0);
        // NOTE: IterableMapping.add(iMap, address(0));
        map.set(address(1), 100);
        map.set(address(2), 200);

        for (uint i = 0; i < map.size(); i++) {
            // NOTE: you cannot iterate a map
            address key = map.getKeyAtIndex(i);

            assert(map.get(key) == i * 100);
        }
    }
}
