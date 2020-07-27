/**
 * JS helpers for make work with DOOM more comfortable.
 */

export default class JSHelpers {

    /**
     * Get Siblings elements
     * @param $firstChild
     * @returns {[]}
     */
    getSiblings($firstChild) {
        let allSibling = [];
        for(let child in $firstChild) {
            if($firstChild[child].nodeType === 1) {
                allSibling.push($firstChild[child]);
            }
        }
        return allSibling;
    }
}
