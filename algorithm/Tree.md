# Tree

## **目录**
1. [二叉树](#1)
2. [树、森林](#2)
3. [哈夫曼树WAL](#3)
4. [二叉搜索/排序树](#4)
5. [二叉平衡树](#5)
6. [红黑树](#6)
7. [B树/B+/B-树](#7)
8. [懒树](#8)

&nbsp;

## <span id = "1">**二叉树**</span>
### 性质
* n个节点的二叉树共有几种形态
$$ {C^n_{2n}}\over{n+1} $$

* 在二叉树中，叶子节点数n0与度为二的节点数n2的关系
$$ n_{leaf} = n_2 + 1 $$
$证明:$
$$ 叶子总数n = n_{leaf} + n_1 + n_2 $$
$$ 由节点指出的分支数f = n_1 + n_2 * 2 $$
$$ 由指向节点的分支数f = n -1(根节点没有被指向) $$
$$ n_1 + N_2 * 2 = n - 1 ==> n_{leaf} = n_2 + 1$$

* 深度为k的完全满二叉树的节点数为
$$ 2^K-1 $$

* 对含有n个节点的完全二叉树从上到下，从左到右进行1~n编号
$$ 节点编号为i的双亲节点编号为i/2 $$
$$ 编号为i的节点的左孩子编号为2 * i，右孩子编号为2 * i + 1 $$

* 一棵完全二叉树上有1001个结点，其中叶子结点的个数是()
$$ 最后一个节点的双亲为1001/2 = 500 $$
$$ leaf = 1001 - 500 = 501 $$

&nbsp;

## <span id = "2">**树、森林**</span>
### 性质


* 计算树的叶子数
```
在某棵五叉树中,具有50个度为1的结点,40个度为2的结点,30个度为3的结点,20个度为4的结点,10个度为5的结点,则该树共有多少个叶子结点
```
$$ leaf = 1 + 40 * 1 + 30 * 2 + 20 * 3 + 10 * 4 = 201 $$


&nbsp;

## <span id = "3">**哈夫曼树WAL**</span>
### 性质
* 度
$$ 哈夫曼树中结点的度仅可能为 0, 2. $$


* 编码
$$ 字符集的每一个字符均不是其他字符编码的前缀。 $$
```
1.以下编码不属于前缀编码的是 (C)
A.{1, 01, 001, 0001}
B.{00, 01, 10, 11}
C.{0, 1, 01, 11}
D.{0, 101, 100, 11}
```


* 哈夫曼树是叶子
```
2.设哈夫曼树中有1999个结点，则该哈夫曼树中有（B）个叶子结点。
A.999
B.1000
C.1001
D.以上都错
```
&nbsp;

## <span id = "">**二叉搜索/排序树**</span>
