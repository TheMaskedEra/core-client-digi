import { NodeMap } from '@simulation/DAGmap/NodeMap'

class NodeNavigator {
    private currentNodeId: string
    private data: any //TODO Amélioration possible pour plus tard c'est de typer data.
    private readonly map: NodeMap
    private readonly history: string[]

    //TODO Changer le updatede data, si on back plusieurs fois il y a des données fantomes dans data

    constructor(initialNodeId: string, nodeMap: NodeMap) {
        this.currentNodeId = initialNodeId
        this.history = [initialNodeId]
        this.data = {}
        this.map = nodeMap
    }

    getCurrentNode(): string {
        return this.currentNodeId
    }

    getHistory(): string[] {
        return this.history
    }

    updateData(newData: any) {
        this.data = { ...this.data, ...newData }
    }

    private getNodePaths() {
        return this.map.paths[this.currentNodeId];
    }

    getNodePathIds(): string[] {
        return this.getNodePaths().map((path) => {
            return path.next
        })
    }

    canGoNext(pathId: string): boolean {
        return this.getNodePaths().some((path) =>
            path.next === pathId && (!path.condition || path.condition(this.data))
        );
    }

    goNext(pathId: string): boolean {
        if (!this.canGoNext(pathId)) return false;

        this.history.push(pathId);
        this.currentNodeId = pathId;

        return true;
    }

    goBack(): boolean {
        if (this.history.length > 1) {
            this.history.pop()
            this.currentNodeId = this.history[this.history.length - 1]
            return true
        }
        return false
    }
}