var e=`import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { GripHorizontal, ChevronUp, ChevronDown } from 'lucide-react';
import Button from '../Button';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// -----------------
// ProductRow
// -----------------
const ProductRow = observer(({ field }: { field: any }) => (
  <div className="flex items-center gap-2">
    <input
      {...field.$('name').bind()}
      className="form-input flex-1 min-w-0"
      placeholder="Product name"
    />
    <input
      {...field.$('price').bind()}
      className="form-input w-24"
      placeholder="Price"
    />
    <Button
      onlyIcon
      text="Del"
      type="button"
      icon="times-circle"
      label={field.label}
      onClick={field.onDel}
      className="btn-ghost !px-2 !py-1.5 text-red-500 hover:text-red-600"
    />
  </div>
));

// -----------------
// SortableItem
// -----------------
const SortableItem = observer(function SortableItem({
  id,
  field,
  onMove,
}: {
  id: string;
  field: any;
  onMove: (id: string, dir: "up" | "down") => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={\`card mb-2 \${isDragging ? 'opacity-50 shadow-elevated' : ''}\`}
    >
      <div className="card-body !py-3 !px-4 flex items-center gap-3">
        <button
          type="button"
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-surface-400 hover:text-surface-600 transition-colors touch-none"
          aria-label="Drag to reorder"
        >
          <GripHorizontal size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <ProductRow field={field} />
        </div>
        <div className="flex flex-col gap-0.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => onMove(id, "up")}
            className="text-surface-400 hover:text-surface-700 transition-colors p-0.5"
            aria-label="Move up"
          >
            <ChevronUp size={14} />
          </button>
          <button
            type="button"
            onClick={() => onMove(id, "down")}
            className="text-surface-400 hover:text-surface-700 transition-colors p-0.5"
            aria-label="Move down"
          >
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
});

// -----------------
// SortableList
// -----------------
export default observer(function SortableList({ form }: { form: any }) {
  const sensors = useSensors(useSensor(PointerSensor));
  const productsField = form.$("products");
  if (typeof window !== 'undefined') (window as any).__form = form;
  const items = productsField.map(f => String(f.key));

  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;
    setActiveId(null);
    if (!over || active.id === over.id) return;

    const fromIdx = items.indexOf(String(active.id));
    const toIdx = items.indexOf(String(over.id));
    if (fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) return;

    productsField.move(fromIdx, toIdx);
  }

  function handleMove(id: string, dir: "up" | "down") {
    const idx = items.indexOf(String(id));
    if (idx === -1) return;
    const newIdx = dir === "up" ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= items.length) return;

    productsField.move(idx, newIdx);
  }

  const activeField = activeId
    ? productsField.map(f => f).find(f => String(f.key) === activeId)
    : null;

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Sortable Products</h2>
        <p className="text-sm text-surface-500 mt-0.5">Drag to reorder products</p>
      </div>
      <div className="card-body">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={items}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {items.map(key => (
                <SortableItem
                  key={key}
                  id={key}
                  field={productsField.map(f => f).find(f => String(f.key) === key)}
                  onMove={handleMove}
                />
              ))}
            </div>
          </SortableContext>

          <DragOverlay>
            {activeField ? (
              <div className="card shadow-elevated">
                <div className="card-body !py-3 !px-4 flex items-center gap-3">
                  <GripHorizontal size={20} className="text-surface-400" />
                  <div className="flex-1">
                    <ProductRow field={activeField} />
                  </div>
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-surface-200">
          <Button
            type="button"
            text="Add Product"
            icon="plus-circle"
            onClick={productsField.onAdd}
            className="btn-primary"
          />
          <Button
            type="button"
            text="Submit (show values)"
            icon="check-circle"
            onClick={productsField.onSubmit}
            className="btn-ghost"
          />
        </div>
      </div>
    </div>
  );
});
`;export{e as default};