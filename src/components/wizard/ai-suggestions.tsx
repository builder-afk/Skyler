'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lightbulb,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Plus,
  Check,
  Zap,
  TrendingUp,
  ArrowRight,
  X,
  Filter
} from 'lucide-react'
import {
  type FeatureSuggestion,
  type SuggestionCategory,
  getSuggestionsByStep,
  getSuggestionsByStack,
  getSmartSuggestions,
  getCategoryLabel,
  getDifficultyColor,
  getImpactColor
} from '@/lib/feature-suggestions'
import { Button } from '@/components/ui/button'

interface AISuggestionsProps {
  /** Current user idea text for smart matching */
  idea?: string
  /** Selected project stack/type */
  stack: string
  /** Current wizard step (for step-specific suggestions) */
  step?: number
  /** Compact mode for sidebar usage */
  compact?: boolean
  /** Callback when user selects a feature to add to their idea */
  onAddFeature?: (feature: FeatureSuggestion) => void
  /** Which features have already been added */
  addedFeatures?: string[]
}

const CATEGORY_FILTERS: SuggestionCategory[] = [
  'ux', 'auth', 'ai', 'payments', 'analytics', 'realtime',
  'security', 'integration', 'monetization', 'social', 'seo'
]

export function AISuggestions({
  idea = '',
  stack,
  step,
  compact = false,
  onAddFeature,
  addedFeatures = []
}: AISuggestionsProps) {
  const [expanded, setExpanded] = useState(!compact)
  const [activeFilter, setActiveFilter] = useState<SuggestionCategory | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [addingId, setAddingId] = useState<string | null>(null)

  const suggestions = useMemo(() => {
    let results: FeatureSuggestion[]

    if (idea && idea.length > 10) {
      results = getSmartSuggestions(idea, stack, 12)
    } else if (step) {
      results = getSuggestionsByStep(stack, step)
    } else {
      results = getSuggestionsByStack(stack)
    }

    if (activeFilter) {
      results = results.filter(s => s.category === activeFilter)
    }

    return results
  }, [idea, stack, step, activeFilter])

  const handleAdd = useCallback((feature: FeatureSuggestion) => {
    setAddingId(feature.id)
    onAddFeature?.(feature)
    setTimeout(() => setAddingId(null), 800)
  }, [onAddFeature])

  if (!suggestions.length) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`rounded-2xl border border-border overflow-hidden transition-all duration-300 ${
        compact ? 'bg-background' : 'bg-gradient-to-br from-background via-background to-accent/[0.03]'
      }`}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/30 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center">
            <Lightbulb className="w-4.5 h-4.5 text-amber-500" />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              Feature Ideas
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-600 border border-amber-500/20">
                AI
              </span>
            </h3>
            {!compact && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {idea && idea.length > 10
                  ? 'Smart suggestions based on your idea'
                  : step
                    ? `Ideas for Step ${step}`
                    : 'Popular features to enhance your app'
                }
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground bg-secondary/60 px-2 py-1 rounded-full">
            {suggestions.length}
          </span>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Category Filters */}
            <div className="px-5 pb-3 overflow-x-auto">
              <div className="flex items-center gap-1.5 min-w-max">
                <button
                  onClick={() => setActiveFilter(null)}
                  className={`text-[11px] font-medium px-3 py-1.5 rounded-full transition-all border ${
                    activeFilter === null
                      ? 'bg-foreground text-background border-foreground shadow-sm'
                      : 'bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  All
                </button>
                {CATEGORY_FILTERS
                  .filter(cat => suggestions.some(s => s.category === cat) || activeFilter === cat)
                  .map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
                      className={`text-[11px] font-medium px-3 py-1.5 rounded-full transition-all border whitespace-nowrap ${
                        activeFilter === cat
                          ? 'bg-foreground text-background border-foreground shadow-sm'
                          : 'bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      {getCategoryLabel(cat)}
                    </button>
                  ))}
              </div>
            </div>

            {/* Suggestions Grid */}
            <div className={`px-5 pb-5 ${compact ? 'space-y-2' : 'grid gap-3 grid-cols-1 sm:grid-cols-2'}`}>
              {suggestions.map((feature, i) => {
                const isAdded = addedFeatures.includes(feature.id)
                const isAdding = addingId === feature.id
                const isHovered = hoveredId === feature.id

                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    onMouseEnter={() => setHoveredId(feature.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group/card relative rounded-xl border p-4 transition-all duration-200 cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-500/[0.04] border-emerald-500/20'
                        : isHovered
                          ? 'bg-secondary/60 border-foreground/15 shadow-sm -translate-y-0.5'
                          : 'bg-background hover:bg-secondary/40 border-border'
                    }`}
                    onClick={() => !isAdded && handleAdd(feature)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-base leading-none">{feature.icon}</span>
                          <h4 className="text-sm font-semibold text-foreground truncate">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {feature.description}
                        </p>

                        {/* Tags */}
                        <div className="flex items-center gap-2 mt-3">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getDifficultyColor(feature.difficulty)}`}>
                            {feature.difficulty}
                          </span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${getImpactColor(feature.impact)}`}>
                            <TrendingUp className="w-2.5 h-2.5" />
                            {feature.impact} impact
                          </span>
                        </div>
                      </div>

                      {/* Add/Added indicator */}
                      <div className="shrink-0 mt-0.5">
                        {isAdded ? (
                          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                        ) : isAdding ? (
                          <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm"
                          >
                            <Check className="w-3.5 h-3.5 text-white" />
                          </motion.div>
                        ) : (
                          <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                            isHovered
                              ? 'bg-foreground text-background border-foreground scale-110'
                              : 'bg-secondary/60 text-muted-foreground border-border'
                          }`}>
                            <Plus className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            {!compact && idea && idea.length > 10 && (
              <div className="px-5 pb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/40 rounded-lg p-3 border border-border/50">
                  <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>
                    Click any suggestion to add it to your project requirements.
                    Features are tailored to your <strong className="text-foreground">{stack.replace('-', ' ')}</strong> stack.
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
