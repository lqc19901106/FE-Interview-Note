const data = [
    {
        title: '系统管理',
        parentName: '',
        parentId: 0,
        id: 1,
    },
    {
        title: '菜单管理',
        parentName: '系统管理',
        parentId: 1,
        id: 11,
    },
    {
        title: '菜单新增',
        parentName: '菜单管理',
        parentId: 11,
        id: 111,
    },
    {
        title: '菜单编辑',
        parentName: '菜单管理',
        parentId: 11,
        id: 112,
    },
    {
        title: '菜单删除',
        parentName: '菜单管理',
        parentId: 11,
        id: 113,
    },
    {
        title: '角色管理',
        parentName: '系统管理',
        parentId: 1,
        id: 22,
    },
    {
        title: '角色新增',
        parentName: '角色管理',
        parentId: 22,
        id: 221,
    },
    {
        title: '角色编辑',
        parentName: '角色管理',
        parentId: 22,
        id: 222,
    },
    {
        title: '角色删除',
        parentName: '角色管理',
        parentId: 22,
        id: 223,
    },
    {
        title: '用户管理',
        parentName: '系统管理',
        parentId: 1,
        id: 33,
    },
    {
        title: '用户新增',
        parentName: '用户管理',
        parentId: 33,
        id: 331,
    },
    {
        title: '用户编辑',
        parentName: '用户管理',
        parentId: 33,
        id: 332,
    },
    {
        title: '用户删除',
        parentName: '用户管理',
        parentId: 33,
        id: 333,
    }
];
/**
 * 
 * @param {* 需要转换的数据对象} treeList 
 * @param {* 索引字段的key} id 
 * @param {* 父对象索引字段的key} parentId 
 */
export const dataToTree = (treeList = [], id, parentId) => {
    let idList = {};
    let newList = [];
    treeList.forEach(treeItem => {
        idList[treeItem[id]] = treeItem;
    });

    treeList.forEach(treeItem => {
        const parentItem = idList[treeItem[parentId]];
        //如果aValParent存在；就说明当前的aVal是aValParent的孩子
        if (parentItem) {
            if ('chindren' in parentItem) {
                parentItem['children'].push(treeItem)
            } else {
                parentItem['children'] = [];
                parentItem['children'].push(treeItem)
            }
        } else {
            newList.push(treeItem)
        }
    })

    return newList;
}